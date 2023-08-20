import TestimonialCard from "../../components/TestimonialCard";
import UserPhoto from "../user_1.jpg";

const TestimonialCardData = [
  {
    id: 1,
    content: (
      <TestimonialCard
        header="Donor Opinion"
        name="Brandon Munson"
        address="khulna,Bangladesh"
        image={UserPhoto}
        pra="I have been a donar since high school.Aithough i hava no been a donaor ever year, i always want to give to the humen rase. i love to help others! Moreover it gives a real peace in mind."
      />
    ),
  },
  {
    id: 2,
    content: (
      <TestimonialCard
        header="Donor Opinion"
        name="Brandon Munson"
        address="khulna,Bangladesh"
        image={UserPhoto}
        pra="I have been a donar since high school.Aithough i hava no been a donaor ever year, i always want to give to the humen rase. i love to help others! Moreover it gives a real peace in mind."
      />
    ),
  },
  {
    id: 3,
    content: (
      <TestimonialCard
        header="Donor Opinion"
        name="Brandon Munson"
        address="khulna,Bangladesh"
        image={UserPhoto}
        pra="I wish I could tell you my donor how grateful i am for your selfiess act.You gave me new life. We may be coworkers of schoolmates of just two in the same cammunity. I'm very grateful to you."
      />
    ),
  },
];

export default TestimonialCardData;
