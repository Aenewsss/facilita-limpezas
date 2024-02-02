export function formatarTelefone(phoneNumber: string) {
    let cleanPhoneNumber = phoneNumber.replace(/\D/g, '');

    let phoneFormated = ''

    if (cleanPhoneNumber.length > 11) {
        // Limita o número de dígitos a 14
        cleanPhoneNumber = cleanPhoneNumber.slice(0, 11);
    }

    for (let i = 0; i < cleanPhoneNumber.length; i++) {
        // Adiciona parênteses após os dois primeiros números
        if (i === 0) {
            phoneFormated += '(';
        }
        if (i === 2) {
            phoneFormated += ') ';
        }
        // Adiciona espaço após os dois primeiros números e antes do sétimo
        else if (i === 7) {
            phoneFormated += ' ';
        }
        // Adiciona hífen após o sétimo número
   

        phoneFormated += cleanPhoneNumber[i];
    }

    return phoneFormated
}