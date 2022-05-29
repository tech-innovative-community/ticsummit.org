import React, { useState } from "react";
import "./FAQ.css";

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [op, setOp] = useState(false);
  const [ope, setOpe] = useState(false);
  return (
    <div className="Questions">
      <p>ABOUT FAQs</p>
      <div className="faqContainer">
        <div className={open ? "questions vissible" : "questions"}>
          <p onClick={() => setOpen(!open)}>
            Why should you participate in the Tech Innovation Challenge?{" "}
            <span className={open ? "plus rotate" : "plus"}>+</span>
          </p>
          <div className="answer">
            Universities have many competitions for entrepreneurs. Many
            Cameroonian and African startups have sprouted from these
            tournaments. Most of TiC’s organizers have been to and won prizes at
            these competitions, in case you were wondering. But ask yourself
            this question: is there any science fair or technology competition
            for Cameroonian secondary schools like elsewhere in the world? I
            guess not. Why’s that? Is it because there are no brilliant,
            hardworking, creative, and innovative students in secondary schools?
            Is it because young entrepreneurs cannot be nurtured right from
            secondary schools? Or is it because no one cares about you? The Tech
            Innovation Challenge is a golden opportunity for secondary students
            to take up the armor of creativity and entrepreneurship. You are
            brilliant, creative, and innovative, and you deserve a chance to
            express yourselves. That’s the goal of the TiC Summit, to show the
            Nation and the world, the enormous talent that resides inside of
            you. So seize the opportunity! A technology competition for
            secondary schools? Absolutely amazing! You must all be very excited,
            just as we are. Because together we’re building the Cameroon we
            deserve, instead of always complaining. Get to work, and see you at
            the Summit! Communications, TiC
          </div>
        </div>
        <div className={ope ? "questions vissible1" : "questions"}>
          <p onClick={() => setOpe(!ope)}>
            What are the different types of projects eligible for the Tech
            Innovation Challenge?
            <span className={ope ? "plus rotate" : "plus"}>+</span>
          </p>
          <div className="answer">
            Well, the answer is simple: Any technology-based project that solves
            a problem facing your community. Here's a good example of a project
            we received last year: This student developed a vacuum cleaner from
            waste material. Vacuum cleaners are essential for cleaning, but
            they're very expensive. Do you see the problem she's solving? Other
            participants worked on apps and websites that solved particular
            problems, such as managing student timetables for example. Look
            around you, you can easily come up with dozens of problems that you
            can solve with the help of technology. That's what we expect from
            you. Your projects are your own, and you can continue working on
            them right after the summit. These could be the next Cardiopads. All
            this is for you; because great businesses in the world today started
            as small projects like these. Get to work, and see you at the
            Summit! Communication, TiC.
          </div>
        </div>
        <div className={op ? "questions vissible2" : "questions"}>
          <p onClick={() => setOp(!op)}>
            Why do you need us?{" "}
            <span className={op ? "plus rotate" : "plus"}>+</span>
          </p>
          <div className="answer">
            We are ready to guide you as you build the very basic prototypes of
            your projects. We do not necessarily want you to build flying
            airplanes, we just want you to be innovative, hardworking, and to
            solve a problem. Get to work, and see you at the Summit!
            Communications, TiC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
