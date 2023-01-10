import ServicesCard from "./Services_card/ServicesCard";
import './ServicesSection.css'
function ServiceSection() {
    const secureData = {
        img: 'https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg',
        header: 'Secure',
        description: 'We strictly only deal with vendors that provide top notch security.'
    }

    const supportData = {
        img: 'https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg',
        header: '24/7 Support',
        description:'Lorem ipsum donor amet siti ceali placeholder text'
    }

    const customizableData = {
        img:'https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg',
        header: 'Customizable',
        description:'Lorem ipsum donor amet siti ceali placeholder text'
    }
    return(
        <section className="services-section">
            <ServicesCard props={secureData} />
            <ServicesCard props={supportData} />
            <ServicesCard props={customizableData} />
        </section>
    )
}

export default ServiceSection;