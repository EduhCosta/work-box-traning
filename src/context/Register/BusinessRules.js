// @flow
import type { Size } from './RegisterContext';

type configsToShouldHaveSizesAccordingOfQuantities = {
    sizes: Array<Size>,
    quantity: number
}

export function shouldHaveSizesAccordingOfQuantities(options: configsToShouldHaveSizesAccordingOfQuantities, callback: ?(param: string) => void) {
    const { sizes, quantity } = options;
    const message = "A lista de tamanhos não esta de acordo com a quantidade selecionada";

    if (sizes.length < quantity) {
        if (callback) {
            callback(message);
        } else {
            console.warn(message);
        }
    }
}
