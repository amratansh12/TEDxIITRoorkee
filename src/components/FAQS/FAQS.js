import AccordionPart from './AccordionPart';
import './FAQS.css'

export default function FAQS(){
    return(
        <div className="faq-primary">
            <h1>FAQS</h1>
            <div className="answers">
                <AccordionPart />
            </div>
        </div>
    );
}