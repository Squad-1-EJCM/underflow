export default function formatPrice(value: number) {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
