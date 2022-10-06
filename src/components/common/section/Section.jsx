import React from 'react';
import classes from "./Section.module.css";

const Section = ({children, fill, component, container, ...props}) => {
    return (
        <section className={fill ? classes.fill : ' '}>
            <div className={container?'container h-100':'h-100'}>
                <div className="col-12 m-auto d-flex align-items-center h-100">
                    {component?children:<div>{children}</div>}
                </div>
            </div>
        </section>
    );
};

export default Section;