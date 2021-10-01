// Price And Format
export const formatNumber = number => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
}
