"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Step = "delivery" | "address" | "done";
type DeliveryType = "delivery" | "pickup" | null;

interface OrderContextType {
  open: boolean;
  step: Step;

  deliveryType: DeliveryType;
  address: string;

  startOrder: () => void;
  closeOrder: () => void;

  setDeliveryType: (type: DeliveryType) => void;
  setAddress: (address: string) => void;

  nextStep: () => void;
  backStep: () => void;

  resetOrderFlow: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

const STORAGE_KEYS = {
  deliveryType: "order_delivery_type",
  address: "order_address",
};

export function OrderProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("delivery");

  const [deliveryType, setDeliveryTypeState] = useState<DeliveryType>(null);
  const [address, setAddressState] = useState("");

  // ==========================================
  // LOAD FROM LOCAL STORAGE
  // ==========================================
  useEffect(() => {
    const savedDelivery = localStorage.getItem(
      STORAGE_KEYS.deliveryType,
    ) as DeliveryType | null;

    const savedAddress = localStorage.getItem(STORAGE_KEYS.address);

    if (savedDelivery) {
      setDeliveryTypeState(savedDelivery);
    }

    if (savedAddress) {
      setAddressState(savedAddress);
    }
  }, []);

  // ==========================================
  // SET DELIVERY TYPE
  // ==========================================
  const setDeliveryType = (type: DeliveryType) => {
    setDeliveryTypeState(type);

    if (type) {
      localStorage.setItem(STORAGE_KEYS.deliveryType, type);
    } else {
      localStorage.removeItem(STORAGE_KEYS.deliveryType);
    }
  };

  // ==========================================
  // SET ADDRESS
  // ==========================================
  const setAddress = (addr: string) => {
    setAddressState(addr);

    if (addr) {
      localStorage.setItem(STORAGE_KEYS.address, addr);
    } else {
      localStorage.removeItem(STORAGE_KEYS.address);
    }
  };

  // ==========================================
  // OPEN ORDER MODAL
  // ==========================================
  const startOrder = () => {
    setOpen(true);

    // Resume previous progress if available
    if (deliveryType && address) {
      setStep("done");
    } else if (deliveryType) {
      setStep("address");
    } else {
      setStep("delivery");
    }
  };

  // ==========================================
  // CLOSE MODAL
  // ==========================================
  const closeOrder = () => {
    setOpen(false);
  };

  // ==========================================
  // RESET FLOW
  // ==========================================
  const resetOrderFlow = () => {
    setDeliveryTypeState(null);
    setAddressState("");

    localStorage.removeItem(STORAGE_KEYS.deliveryType);
    localStorage.removeItem(STORAGE_KEYS.address);

    setStep("delivery");
  };

  // ==========================================
  // NEXT STEP
  // ==========================================
  const nextStep = () => {
    if (step === "delivery") {
      setStep("address");
      return;
    }

    if (step === "address") {
      setStep("done");
    }
  };

  // ==========================================
  // BACK STEP
  // ==========================================
  const backStep = () => {
    if (step === "done") {
      setStep("address");
      return;
    }

    if (step === "address") {
      setStep("delivery");
    }
  };

  return (
    <OrderContext.Provider
      value={{
        open,
        step,

        deliveryType,
        address,

        startOrder,
        closeOrder,

        setDeliveryType,
        setAddress,

        nextStep,
        backStep,

        resetOrderFlow,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used within OrderProvider");
  }

  return context;
}
