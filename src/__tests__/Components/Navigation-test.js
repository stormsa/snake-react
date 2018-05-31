import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../../Components/Navigation'
import {STEP, KEY, setStep} from "../../Actions/index"

Enzyme.configure({adapter:new Adapter()});
Enzyme.configure({adapter:new Adapter()});
function setup (){
    const dispatch = jest.fn()

    const props = {
        dispatch: dispatch,
        step: STEP.menu,
        score: 0,
        life: 2
    }

    const enzymeWrapper = mount(<Navigation {...props}/>)

    return {
        props, enzymeWrapper, dispatch
    }
}


describe('Test du composant de Navigation', () =>{
    it('Test de la construction du menu', () => {
        const {enzymeWrapper, dispatch} = setup()
        expect(dispatch).toBeCalledWith(setStep(STEP.menu))
        expect(enzymeWrapper.find("#navigationWindow").exists()).toBe(true)

    })
    it('Tests boutons de navigation du jeu', () => {
        const dispatch = jest.fn()
        const spy = jest.spyOn(Navigation.prototype, 'changeDirection');
        const props = {
            dispatch: dispatch,
            step: STEP.newGame,
            score: 0,
            life: 2
        }
        const enzymeWrapper = shallow(<Navigation {...props}/>)
        expect(enzymeWrapper.find("#directionWindow").exists()).toBe(true)
        enzymeWrapper.find('#up').simulate('click');
        expect(spy).toHaveBeenCalled()
    })

})