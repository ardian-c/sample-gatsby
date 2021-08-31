import React, { useState } from 'react';

export default (props) => {
    const [openBox, setOpenBox] = useState(false);
    return (
        <div
            className="panel-group"
            id="accordionSingleOpen"
            role="tablist"
            aria-multiselectable="true"
        >
            <div className="panel panel-default">
                <hr />
                <div
                    className="panel-heading"
                    role="tab"
                    id="headingOne"
                >
                    <h4 className="panel-title">
                        <a
                            role="button"
                            className={openBox && "open"}
                            onClick={() => setOpenBox(!openBox)}
                        >
                            {props.question}
                        </a>
                    </h4>
                </div>
                <div
                    id="collapseItemOpenOne"
                    className={!openBox && "panel-collapse collapse in"}
                    role="tabpanel"
                    aria-labelledby="headingOne"
                >
                    <div className="panel-body">
                        {props.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}