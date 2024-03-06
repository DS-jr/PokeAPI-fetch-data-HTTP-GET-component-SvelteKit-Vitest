import {describe, beforeEach, it, expect} from "vitest";
import { render } from '@testing-library/svelte';
import PokemonDetails from './PokemonDetails.svelte'; // ?

describe("PoKe detAils", () => {
    
    it("must show a loading spinner when making the API Call", () => {
        const {getByText} = render(PokemonDetails);

        expect(() => getByText(/Loading.../i)).not.toThrow(); 
    })
})



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
