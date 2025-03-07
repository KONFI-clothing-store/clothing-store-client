import React from 'react'

import cn from 'classnames'

import { Button } from '@/components/ui'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { CartSelect } from '../CartSelect/CartSelect'
import { submitForm } from './utils/submitForm'

interface Props {
  className?: string
}

export const CartDialog: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger className='rounded-[62px] bg-black py-[19px] text-base text-white duration-500 hover:bg-gray-600'>
          Go to Checkout
        </DialogTrigger>
        <DialogContent className='rounded-[20px]'>
          <DialogHeader>
            <DialogTitle>Do you want to pay for the clothes?!</DialogTitle>
            <DialogDescription>
              Please, enter your payment details.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={submitForm}>
            <div className='grid gap-4'>
              <label>
                Enter your name please
                <Input
                  type='text'
                  placeholder='Jhon Doe'
                  required
                  className='mt-1'
                  inputMode='text'
                  name='name'
                />
              </label>
              <label>
                Enter your phone please
                <Input
                  type='tel'
                  placeholder='+380 12 345 6789'
                  required
                  className='mt-1'
                  inputMode='numeric'
                  name='phone'
                />
              </label>
              <label>
                Enter your email please
                <Input
                  type='email'
                  placeholder='example@gmail.com'
                  required
                  className='mt-1'
                  inputMode='email'
                  name='email'
                />
              </label>
              <label>
                Enter your card number
                <Input
                  type='string'
                  placeholder='4242 4242 4242 4242'
                  required
                  className='mt-1'
                  inputMode='numeric'
                  name='card'
                />
              </label>

              <div className='grid grid-cols-3 gap-4'>
                <CartSelect
                  variant='month'
                  items={[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ]}
                />

                <CartSelect
                  variant='year'
                  items={[
                    '2025',
                    '2026',
                    '2027',
                    '2028',
                    '2029',
                    '2030',
                    '2031',
                    '2032',
                    '2033',
                    '2034',
                    '2035',
                  ]}
                />

                <label>
                  CVC
                  <Input
                    type='cvc'
                    placeholder='CVC'
                    required
                    className='mt-1'
                    inputMode='numeric'
                    pattern='[0-9]{3,4}'
                    maxLength={4}
                    autoComplete='cc-csc'
                    name='cvc'
                  />
                </label>
              </div>
            </div>

            <DialogFooter>
              <Button className='mt-4 px-[80px] py-3'>Pay</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
