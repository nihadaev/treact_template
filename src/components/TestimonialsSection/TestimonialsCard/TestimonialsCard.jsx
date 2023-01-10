import "./TestimonialsCard.css"

const TestimonialsCard = (props) => {
    const {content,author_img,author_name,author_position} = props.props
    return(
        <div className="testimonial">
            <blockquote className="black">
                {content}
            </blockquote>
            <div className="testimonial-foot">
                <div className="testimonial-foot_img">
                    <img src={author_img} alt="" />
                </div>
                <div className="testimonial-foot_info">
                    <h2 className="light_blue">
                        {author_name}
                    </h2>
                    <h3 className="gray">
                        {author_position}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard;