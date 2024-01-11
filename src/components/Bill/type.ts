export interface BillProps {
  totalCount: number;
  totalPayment: number;
  billLoading: boolean;
  productLoading: boolean;
  submitOrderLoading: (loading: boolean) => void;
  deleteSelectItem: () => void;
}
