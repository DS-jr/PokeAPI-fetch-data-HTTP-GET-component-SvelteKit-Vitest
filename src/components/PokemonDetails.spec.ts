import {describe, beforeEach, it, expect, vi} from "vitest";
import { render, waitFor } from '@testing-library/svelte';
import PokemonDetails from './PokemonDetails.svelte'; // ?

describe("PoKe detAils", () => {
    
    beforeEach(() => {
        global.fetch = vi.fn().mockImplementation(() => {
            return Promise.resolve({
                json() {
                  return Promise.resolve({name: 'TeSt poKe', height: 3, weight: 20, sprites: {front_default: ''}});
                }
            });
        });
    });

    it('Should show a loading message when making the API Call', () => {
        const {getByText} = render(PokemonDetails);

        expect(() => getByText(/Loading.../i)).not.toThrow();
    })

    it('should show the data',async () => {
        const {getByText} = render(PokemonDetails);

        await waitFor(() => getByText(/Pokemon: Test Poke/i));
        await waitFor(() => getByText(/Height: 3/i));
        await waitFor(() => getByText(/Weight: 20/i));
    })

    it('should show error when the API fails', async () => {
        global.fetch = vi.fn().mockImplementationOnce(() => {
            return Promise.reject();
        });

        const {getByText } = render(PokemonDetails);

        await waitFor(() => getByText(/Error while loading the data/i));
    })
})
    

//     it("must show a loading spinner when making the API Call", () => {
//         const {getByText} = render(PokemonDetails);

//         expect(() => getByText(/Loading.../i)).not.toThrow(); 
//     })
// })



// describe("Pokemon Details", () => {

//     let instance = null;
//     beforeEach(() => {
//         const host = document.createElement('div');
//         document.body.append(host);
//         instance = new PokemonDetails({ target: host});
//     })

//     it('Should show a loading spinner when making the API Call', () => {
//         expect(instance).toBeTruthy();
//     })
// })

// <h3>(Martin L. King) “You don't have to see the whole staircase. Just take the first step.”</h3>
