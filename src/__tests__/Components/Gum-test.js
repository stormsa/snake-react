import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Gum from '../../Components/Gum'
import {STEP} from "../../Actions/index"

Enzyme.configure({adapter:new Adapter()});

function setup(){
    // Declare functions here
    const props = {
        x: 150,
        y: 150,
        step: STEP.menu
    }
    const enzymeWrapper = mount(<Gum {...props}/>)
    return {
        props,
        enzymeWrapper
    }
}

describe('Gum Component', () => {
    it('Should generate a gum with x and y position', () =>{
        const {enzymeWrapper, props} = setup()
        expect(enzymeWrapper.find('div').hasClass("gum")).toBe(true)
        expect(enzymeWrapper.find('#gum').prop('style')).toHaveProperty('left', props.x+'px')
        expect(enzymeWrapper.find('#gum').prop('style')).toHaveProperty('top', props.y+'px')
    })
})

