export interface FInputSizeProps {
  height?: number;
  padding?: number;
  borderRadius?: number;
}

interface CustomInputSize {
  size48: FInputSizeProps;
  size56: FInputSizeProps;
}

const FInputSize: CustomInputSize = {
  size48: {
    height: 48,
    borderRadius: 8,
    padding: 12,
  },
  size56: {
    height: 56,
    borderRadius: 8,
    padding: 10,
  },
};

export default FInputSize;
