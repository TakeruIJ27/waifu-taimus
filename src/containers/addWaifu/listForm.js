import React, { Component } from 'react';
import { 
    FormGroup, 
    InputGroup, 
    TextArea,
    RadioGroup, 
    Radio, 
    Intent, 
    Button } from '@blueprintjs/core';

class ListForm extends Component {
    render() {
        return(
            <form>
                {/* NAME */}
                <FormGroup label='Name' labelFor='name'>
                    <InputGroup 
                        name='name'
                        id='name'
                        placeholder='Waifu Name'
                    />
                </FormGroup>

                {/* AGE */}
                <FormGroup label='Age' labelFor='age'>
                    <RadioGroup inline
                        name='age'
                        id='age'> 
                        <Radio label='17' value='17' />    
                        <Radio label='18' value='18' />    
                        <Radio label='19' value='19' />    
                        <Radio label='20' value='20' />    
                    </RadioGroup>
                </FormGroup>

                {/* DESCRIPTION */}
                <FormGroup>
                    <TextArea 
                        growVertically = {true}
                        large={true}
                        intent={Intent.PRIMARY}
                        placeholder='Description about this Waifu...'
                    />
                </FormGroup>

                <Button text='Submit' type='Submit' intent="primary"/>
            </form>
        )
    }
}

export default ListForm;