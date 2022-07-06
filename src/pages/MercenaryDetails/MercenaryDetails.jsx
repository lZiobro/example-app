import React from 'react';
import './MercenaryDetails.scss';
import {Link} from 'react-router-dom';

function MercenaryDetails(props) {

    return(
    <>
    <div className="mercenary-details-wrapper soft-edges old-paper-background">
        <div className="mercenary-poster-wrapper">
            <img alt="mercenary-poster" src="https://fwcdn.pl/fph/32/17/343217/362827_1.1.jpg" />
        </div>
        <div className="mercenary-details">
            <h1 className="mercenary-title">Gandalf Gray</h1>
            <div className='mercenary-details-details'>
                <div className="mercenary-details-misc">
                    <p>Race: Human</p>
                    <p>Occupation: Mage</p>
                    <p>Experience: Master</p>
                    <p>Home: Traveler</p>
                    <p>Has own equpiment?: Yes</p>
                </div>
                <div className="mercenary-details-misc">
                    <p>Likes: Smoking pipe</p>
                    <p>Dislikes: Evil</p>
                    <p>Specialty: Immortal</p>
                    <Link className="nostyle" to={`/contact`} state={{recipent: "Gandalf"}} >
                        <button className="contact-btn expand primary-btn">Contact Me</button>
                    </Link>
                </div>
            </div>
        </div>
</div>

<div className="mercenary-details-description soft-edges old-paper-background">
    <h2>About me:</h2>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna convallis, scelerisque turpis non, interdum magna. Donec quis ornare felis. Vestibulum ultricies justo libero, et tempor augue scelerisque nec. Pellentesque posuere dui at ante faucibus sagittis. Aenean in vulputate tortor. Nam rutrum mi enim, sit amet congue augue ullamcorper at. Curabitur velit quam, placerat at tristique id, varius vel dui. Curabitur velit diam, tristique eu scelerisque sit amet, mattis nec quam. Fusce fringilla tincidunt ligula, ut bibendum mi rutrum sed. Morbi semper malesuada convallis. Aliquam erat volutpat. Phasellus ut justo at eros tincidunt tincidunt.

Aliquam non leo ante. Etiam sit amet libero non tellus gravida molestie. Donec sit amet ullamcorper nisl, nec pretium ipsum. Etiam facilisis nulla eleifend, posuere ligula nec, laoreet augue. Sed rhoncus, quam a porttitor scelerisque, erat ligula aliquet dolor, a mollis metus magna tristique purus. Suspendisse potenti. Donec rutrum ut leo vitae efficitur. Aliquam porta massa et nulla lacinia, ac egestas mi euismod. Praesent sollicitudin rutrum faucibus. Donec egestas mattis justo sed commodo.

Praesent eleifend at nulla sed gravida. Donec hendrerit neque a velit ultricies cursus. Phasellus magna leo, pellentesque a interdum a, pharetra quis felis. Nam varius massa vel lacus viverra suscipit. Morbi egestas bibendum sapien, non lacinia est tempus sit amet. Curabitur a mollis enim. Sed ultrices mattis sem at aliquet. Vestibulum et dignissim nibh. Nam varius felis et mauris malesuada tristique. Etiam euismod, erat eu ornare lobortis, sapien magna malesuada neque, ac pulvinar ligula enim at libero. Morbi imperdiet in neque sit amet sodales. In vitae ex lacinia, congue sapien vitae, fringilla nibh. Quisque imperdiet condimentum felis, a cursus sem euismod eget. Duis justo eros, eleifend vitae euismod et, tincidunt in magna. Suspendisse erat massa, luctus eu aliquet ut, porttitor eu tortor. Phasellus at erat ipsum.


Nam euismod tellus turpis, vitae vulputate justo gravida id. Donec gravida malesuada bibendum. Mauris egestas quis justo ac pharetra. Nunc accumsan, lectus ac elementum luctus, leo odio dictum nisl, id dignissim leo lacus et metus. Aliquam vestibulum et leo a fringilla. Sed quis porta eros. Donec neque erat, gravida a placerat volutpat, hendrerit quis dui. Donec aliquam ultricies eleifend. Ut consequat pharetra rhoncus. Ut bibendum augue ac nibh elementum, non sagittis felis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium elementum finibus. Sed suscipit congue augue, at malesuada arcu mollis a. Maecenas orci ex, hendrerit ut neque at, facilisis imperdiet est.
    </p>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna convallis, scelerisque turpis non, interdum magna. Donec quis ornare felis. Vestibulum ultricies justo libero, et tempor augue scelerisque nec. Pellentesque posuere dui at ante faucibus sagittis. Aenean in vulputate tortor. Nam rutrum mi enim, sit amet congue augue ullamcorper at. Curabitur velit quam, placerat at tristique id, varius vel dui. Curabitur velit diam, tristique eu scelerisque sit amet, mattis nec quam. Fusce fringilla tincidunt ligula, ut bibendum mi rutrum sed. Morbi semper malesuada convallis. Aliquam erat volutpat. Phasellus ut justo at eros tincidunt tincidunt.

Aliquam non leo ante. Etiam sit amet libero non tellus gravida molestie. Donec sit amet ullamcorper nisl, nec pretium ipsum. Etiam facilisis nulla eleifend, posuere ligula nec, laoreet augue. Sed rhoncus, quam a porttitor scelerisque, erat ligula aliquet dolor, a mollis metus magna tristique purus. Suspendisse potenti. Donec rutrum ut leo vitae efficitur. Aliquam porta massa et nulla lacinia, ac egestas mi euismod. Praesent sollicitudin rutrum faucibus. Donec egestas mattis justo sed commodo.

Praesent eleifend at nulla sed gravida. Donec hendrerit neque a velit ultricies cursus. Phasellus magna leo, pellentesque a interdum a, pharetra quis felis. Nam varius massa vel lacus viverra suscipit. Morbi egestas bibendum sapien, non lacinia est tempus sit amet. Curabitur a mollis enim. Sed ultrices mattis sem at aliquet. Vestibulum et dignissim nibh. Nam varius felis et mauris malesuada tristique. Etiam euismod, erat eu ornare lobortis, sapien magna malesuada neque, ac pulvinar ligula enim at libero. Morbi imperdiet in neque sit amet sodales. In vitae ex lacinia, congue sapien vitae, fringilla nibh. Quisque imperdiet condimentum felis, a cursus sem euismod eget. Duis justo eros, eleifend vitae euismod et, tincidunt in magna. Suspendisse erat massa, luctus eu aliquet ut, porttitor eu tortor. Phasellus at erat ipsum.


Nam euismod tellus turpis, vitae vulputate justo gravida id. Donec gravida malesuada bibendum. Mauris egestas quis justo ac pharetra. Nunc accumsan, lectus ac elementum luctus, leo odio dictum nisl, id dignissim leo lacus et metus. Aliquam vestibulum et leo a fringilla. Sed quis porta eros. Donec neque erat, gravida a placerat volutpat, hendrerit quis dui. Donec aliquam ultricies eleifend. Ut consequat pharetra rhoncus. Ut bibendum augue ac nibh elementum, non sagittis felis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium elementum finibus. Sed suscipit congue augue, at malesuada arcu mollis a. Maecenas orci ex, hendrerit ut neque at, facilisis imperdiet est.
    </p>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna convallis, scelerisque turpis non, interdum magna. Donec quis ornare felis. Vestibulum ultricies justo libero, et tempor augue scelerisque nec. Pellentesque posuere dui at ante faucibus sagittis. Aenean in vulputate tortor. Nam rutrum mi enim, sit amet congue augue ullamcorper at. Curabitur velit quam, placerat at tristique id, varius vel dui. Curabitur velit diam, tristique eu scelerisque sit amet, mattis nec quam. Fusce fringilla tincidunt ligula, ut bibendum mi rutrum sed. Morbi semper malesuada convallis. Aliquam erat volutpat. Phasellus ut justo at eros tincidunt tincidunt.

Aliquam non leo ante. Etiam sit amet libero non tellus gravida molestie. Donec sit amet ullamcorper nisl, nec pretium ipsum. Etiam facilisis nulla eleifend, posuere ligula nec, laoreet augue. Sed rhoncus, quam a porttitor scelerisque, erat ligula aliquet dolor, a mollis metus magna tristique purus. Suspendisse potenti. Donec rutrum ut leo vitae efficitur. Aliquam porta massa et nulla lacinia, ac egestas mi euismod. Praesent sollicitudin rutrum faucibus. Donec egestas mattis justo sed commodo.

Praesent eleifend at nulla sed gravida. Donec hendrerit neque a velit ultricies cursus. Phasellus magna leo, pellentesque a interdum a, pharetra quis felis. Nam varius massa vel lacus viverra suscipit. Morbi egestas bibendum sapien, non lacinia est tempus sit amet. Curabitur a mollis enim. Sed ultrices mattis sem at aliquet. Vestibulum et dignissim nibh. Nam varius felis et mauris malesuada tristique. Etiam euismod, erat eu ornare lobortis, sapien magna malesuada neque, ac pulvinar ligula enim at libero. Morbi imperdiet in neque sit amet sodales. In vitae ex lacinia, congue sapien vitae, fringilla nibh. Quisque imperdiet condimentum felis, a cursus sem euismod eget. Duis justo eros, eleifend vitae euismod et, tincidunt in magna. Suspendisse erat massa, luctus eu aliquet ut, porttitor eu tortor. Phasellus at erat ipsum.


Nam euismod tellus turpis, vitae vulputate justo gravida id. Donec gravida malesuada bibendum. Mauris egestas quis justo ac pharetra. Nunc accumsan, lectus ac elementum luctus, leo odio dictum nisl, id dignissim leo lacus et metus. Aliquam vestibulum et leo a fringilla. Sed quis porta eros. Donec neque erat, gravida a placerat volutpat, hendrerit quis dui. Donec aliquam ultricies eleifend. Ut consequat pharetra rhoncus. Ut bibendum augue ac nibh elementum, non sagittis felis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium elementum finibus. Sed suscipit congue augue, at malesuada arcu mollis a. Maecenas orci ex, hendrerit ut neque at, facilisis imperdiet est.
    </p>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet magna convallis, scelerisque turpis non, interdum magna. Donec quis ornare felis. Vestibulum ultricies justo libero, et tempor augue scelerisque nec. Pellentesque posuere dui at ante faucibus sagittis. Aenean in vulputate tortor. Nam rutrum mi enim, sit amet congue augue ullamcorper at. Curabitur velit quam, placerat at tristique id, varius vel dui. Curabitur velit diam, tristique eu scelerisque sit amet, mattis nec quam. Fusce fringilla tincidunt ligula, ut bibendum mi rutrum sed. Morbi semper malesuada convallis. Aliquam erat volutpat. Phasellus ut justo at eros tincidunt tincidunt.

Aliquam non leo ante. Etiam sit amet libero non tellus gravida molestie. Donec sit amet ullamcorper nisl, nec pretium ipsum. Etiam facilisis nulla eleifend, posuere ligula nec, laoreet augue. Sed rhoncus, quam a porttitor scelerisque, erat ligula aliquet dolor, a mollis metus magna tristique purus. Suspendisse potenti. Donec rutrum ut leo vitae efficitur. Aliquam porta massa et nulla lacinia, ac egestas mi euismod. Praesent sollicitudin rutrum faucibus. Donec egestas mattis justo sed commodo.

Praesent eleifend at nulla sed gravida. Donec hendrerit neque a velit ultricies cursus. Phasellus magna leo, pellentesque a interdum a, pharetra quis felis. Nam varius massa vel lacus viverra suscipit. Morbi egestas bibendum sapien, non lacinia est tempus sit amet. Curabitur a mollis enim. Sed ultrices mattis sem at aliquet. Vestibulum et dignissim nibh. Nam varius felis et mauris malesuada tristique. Etiam euismod, erat eu ornare lobortis, sapien magna malesuada neque, ac pulvinar ligula enim at libero. Morbi imperdiet in neque sit amet sodales. In vitae ex lacinia, congue sapien vitae, fringilla nibh. Quisque imperdiet condimentum felis, a cursus sem euismod eget. Duis justo eros, eleifend vitae euismod et, tincidunt in magna. Suspendisse erat massa, luctus eu aliquet ut, porttitor eu tortor. Phasellus at erat ipsum.


Nam euismod tellus turpis, vitae vulputate justo gravida id. Donec gravida malesuada bibendum. Mauris egestas quis justo ac pharetra. Nunc accumsan, lectus ac elementum luctus, leo odio dictum nisl, id dignissim leo lacus et metus. Aliquam vestibulum et leo a fringilla. Sed quis porta eros. Donec neque erat, gravida a placerat volutpat, hendrerit quis dui. Donec aliquam ultricies eleifend. Ut consequat pharetra rhoncus. Ut bibendum augue ac nibh elementum, non sagittis felis euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean pretium elementum finibus. Sed suscipit congue augue, at malesuada arcu mollis a. Maecenas orci ex, hendrerit ut neque at, facilisis imperdiet est.
    </p>
</div>
</>
)
}

export default MercenaryDetails;

