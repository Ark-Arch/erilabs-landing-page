import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
import { Info } from "../cards/Info"

 
export const AboutUs = () => {
  return (
    <section id="about-us">
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
            <div className="w-full md:w-5/12 lg:w-1/2">
                <div className="w-full h-80 sm:h-96 relative">
                    <img
                    src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                    alt="About Our Mission"
                    />
                </div>
            </div>
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                <Title>About Our Automated Solution</Title>
                <Paragraph>
                    At Erilabs, we are dedicated to revolutionizing the way businesses operate through our cutting-edge automated solutions. 
                    Our mission is to empower organizations by streamlining processes, enhancing efficiency, and driving innovation. 
                    With a team of experts in automation technology, we provide tailored solutions that meet the unique needs of each client. 
                    Whether it's automating routine tasks or implementing complex systems, we are committed to delivering excellence and helping businesses thrive in a competitive landscape.
                </Paragraph>
                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                    <Info
                    title="Mission"
                    description="Our mission is to use Robotics for the good of humanity and the planet."
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                    </svg>
                    </Info>
                    <Info
                    title="Vision"
                    description="Our vision is to drive business innovation and growth."
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                        />
                    </svg>
                    </Info>
                </div>
            </div>
        </Container>
    </section>
  )
}

