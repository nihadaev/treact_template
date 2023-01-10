import './QuestionsSection.css'
import { useState } from 'react';
const QuestionsSection = () => {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            header: 'Is lunch provided free of cost ?',
            content: 'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
            isOpen: false
        },
        {
            id: 2,
            header: 'Do you have 2 Bedroom suites ?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isOpen: false
        },
        {
            id: 3,
            header: 'Are Wi-Fi costs included in the price ?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isOpen: false
        },
        {
            id: 4,
            header: 'Where can I reach you for support ?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            isOpen: false
        }
    ])

    const handleOpen = (id) => {
        console.log(id);
        setQuestions(
            questions.map((question) => {
                if (question.isOpen === true) {
                    return { ...question, isOpen: !question.isOpen }
                }
                if (question.id === id) {
                    return { ...question, isOpen: !question.isOpen }
                }
                else return question
            })
        )
    }
    return (
        <section className='questions-section'>
            <div className="questions-section_left">
                <img src="https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80" alt="" />
            </div>
            <div className="questions-section_right">
                <h2 className='dark_blue'>
                    Questions
                </h2>
                <p className='question_section-right_description gray'>
                    Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.
                </p>
                <ul>
                    {
                        questions && questions.map((question, key) => (
                            <li key={key} className='question ' onClick={() => handleOpen(question.id)}>
                                <h3 className='black' >
                                    {question.header}
                                    <span>
                                        {question.isOpen ?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                        }

                                    </span>
                                </h3>
                               
                                    <p className={question.isOpen ? 'opened black' : 'closed black'}>
                                        {question.content}
                                    </p>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default QuestionsSection;