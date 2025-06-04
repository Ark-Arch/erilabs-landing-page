import { Title } from "../shared/Title"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { services } from "../../utils/services"
import { Service } from "../cards/Service"

export const Services = () => {
  return (
    <section id="services">
        <Container className="space-y-10 md:space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <Title> Our Services</Title>
                <Paragraph>
                    {/* Unlock the potential of advanced control algorithms, machine learning, and predictive analytics.
                    Our services are designed to enhance the performance, reliability, and efficiency of your systems.
                    Whether you need custom solutions or expert consulting, we are here to help you achieve your goals.
                    Explore our offerings and discover how we can transform your operations with cutting-edge technology. */}
                    Unlock the potential of advanced control algorithms, machine learning, and predictive analytics.
                    Our services include:
                </Paragraph>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map((service, key) => (
                    <Service
                    key={key}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    />
                ))}
            </div>
        </Container>
    </section>
  )
}