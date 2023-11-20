import { useEffect } from "react";
import { Box } from "@chakra-ui/react";

declare global {
  interface Window {
    IMP: any;
  }
}

interface PaymentResponse {
  success: boolean;
  imp_uid: string;
  pay_method: string;
  merchant_uid: string;
  name: string;
  paid_amount: number;
  currency: string;
  pg_provider: string;
  pg_type: string;
  pg_tid: string;
  apply_num: string;
  buyer_name: string;
  buyer_email: string;
  buyer_tel: string;
  buyer_addr: string;
  buyer_postcode: string;
  custom_data: any; // 예시에서는 null이었지만 다양한 형태일 수 있음
  status: string;
  paid_at: number;
  receipt_url: string;
  card_name: string;
  bank_name: string | null;
  card_quota: number;
  card_number: string;
}

const PaymentTest = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.body.appendChild(script);

    script.onload = () => {
      const IMP = window.IMP;
      const code = "iamport";
      IMP.init(code);

      const merchant_uid = "merchant_" + new Date().getTime();

      IMP.request_pay(
        {
          merchant_uid: merchant_uid,
          name: "주문 테스트",
          amount: 100,
        },
        function (response: PaymentResponse) {
          console.log(response);
        }
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <Box>Payment Test !!</Box>;
};

export default PaymentTest;