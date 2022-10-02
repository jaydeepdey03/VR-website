import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


const Faq = () => {
    return (
        <div className='m-8 p-4 md:m-20' id='faq'>
            <div className='text-center md:p-5 space-y-6'>
                <h2 className='text-3xl md:text-5xl font-bold'>Frequently Asked Questions</h2>
                <p className='md:ml-64 md:mr-64 opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minima excepturi. Enim nobis impedit sequi ab cumque tempore sint hic, officiis fuga quo non repellendus aspernatur atque debitis tempora voluptatem.</p>
            </div>
            <div className="w-full mt-6 md:p-6 grid grid-cols-1 gap-5">
                <div className="bg-white rounded-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span className=''>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-8 h-8 text-orange-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="bg-white rounded-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span className=''>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-8 h-8 text-orange-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="bg-white rounded-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span className=''>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-8 h-8 text-orange-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
                <div className="bg-white rounded-xl">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 rounded hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                                    <span className=''>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-8 h-8 text-orange-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default Faq
