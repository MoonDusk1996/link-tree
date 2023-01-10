import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: "60px",
  marginTop: "20px",
  transition: "font-size 0.2s ease",
  borderRadius: "8px",
  ":hover": {
    fontSize: "15px",
    border: `1px solid ${theme.palette.primary.light}`,
    transition: "font-size, background, border, 0.3s ease",
  },
  ":active": {
    top: "1px",
  },
}));

type CustomizedButtonsProps = {
  text: string;
  href: string;
};

export default function CustomizedButtons({
  text,
  href,
}: CustomizedButtonsProps) {
  return (
    <ColorButton target={"_blank"} fullWidth variant="outlined" href={href}>
      {text}
    </ColorButton>
  );
}
