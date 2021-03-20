import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionComponent({latency}) {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className="accordionHeader">
                    <h2>Teste</h2>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        ping
                    </p>
                    <p>
                        {latency}
                    </p>

                    <p>Jitter</p>
                    <p>123 packages</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}