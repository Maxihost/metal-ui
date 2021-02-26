import { ButtonTwo } from './index'

export default {
  title: 'ButtonTwo',
  component: ButtonTwo,
  argTypes: {
    type: {
      description: 'The type of button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
    isSmall: {
      description: 'A small version of the button',
      type: 'boolean',
    },
    children: {
      description: 'The button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
  },
}

const Template = props => <ButtonTwo {...props} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = { type: 'secondary' }

export const Small = Template.bind({})
Small.args = { isSmall: true }