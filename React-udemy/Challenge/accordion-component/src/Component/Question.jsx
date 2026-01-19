import React from 'react'
import QuestionItems from './QuestionItems';
import { useState } from 'react';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Question() {
  const [IsOpen, SetIsOpen] = useState(false)
  

  return (
    <div className='outlay'>
      {faqs.map((item, i) => (
        <QuestionItems title={item.title} text={item.text} num={i} key={i} curOpen={IsOpen} onOpen={SetIsOpen}/>
      ))}
    </div>
  )
}
