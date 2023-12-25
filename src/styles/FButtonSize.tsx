export interface FButtonSizeProps {
  height?: number;
  padding?: number;
  borderRadius?: number;
}

interface CustomButtonSize {
  size40: FButtonSizeProps;
  size48: FButtonSizeProps;
}

const FButtonSize: CustomButtonSize = {
  size40: {
    height: 40,
    borderRadius: 8,
    padding: 16,
  },
  size48: {
    height: 48,
    borderRadius: 8,
    padding: 12,
  },
};

export default FButtonSize;
