import React from 'react'
import { FormWrap, FormCol } from './utils/container'
import TextField from './utils/field'
import Alert from './utils/alert'
import { PointContainer, OriginContainer } from './utils/fieldContainer'
import { SwitcherProvider, SwitcherWrapper } from './switcher'
import InfoBlock from './info'

const Form = () => {
    return (
        <SwitcherProvider>
            <FormWrap>
                <FormCol>
                    <Alert />
                    <TextField name="title" label="title" />
                    <SwitcherWrapper name="point">
                        <PointContainer>
                            <TextField name="point.lat" label=" geo lat" />
                            <TextField name="point.lng" label="geo lng" />
                        </PointContainer>
                    </SwitcherWrapper>

                    <SwitcherWrapper name="stream">
                        <TextField name="stream" label="stream" />
                    </SwitcherWrapper>

                    <SwitcherWrapper name="origin">
                        <OriginContainer>
                            <TextField name="origin.title" label="origin title" />
                            <TextField name="origin.url" label="origin url" />
                        </OriginContainer>
                    </SwitcherWrapper>
                </FormCol>
                <FormCol>
                    <InfoBlock />
                </FormCol>
            </FormWrap>
        </SwitcherProvider>
    )
}

export default Form
