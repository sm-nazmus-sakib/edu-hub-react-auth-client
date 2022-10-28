import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className='p-5'>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. How much time to finish the course?</Accordion.Header>
        <Accordion.Body>
          <p> This is on of the best learning platform in our country. This course is basic to Advanced. As per our system our course duration is six months.  </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. Is there a live instructor in the class?</Accordion.Header>
        <Accordion.Body>
          <p>Yes. All our classes are taught in in-person in Manhattan with a live instructor in the same room as the students</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>3. Are there discounts, scholarships, or payment plans available?</Accordion.Header>
        <Accordion.Body>
          <p>Discounts are available for 18+ hour courses. Certificate programs are heavily discounted packages and are not eligible for discounts. Payment plans are available for certain programs. For more information contact us with official number. +880134-56789</p>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
        </div>
    );
};

export default Faq;