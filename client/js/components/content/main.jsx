"use strict";

class Content extends React.Component {
    constructor(props) {
        super();
    }

    render(){
        return(
            <div id="page-title">
                <h1 className="page-header text-overflow">Главная страница...</h1>
            </div>
        )
    }
}


module.exports = Content;



/*
<!--Page Title-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->

<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--End page title-->


<!--Breadcrumb-->
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Library</a></li>
    <li class="active">Data</li>
</ol>
<!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
<!--End breadcrumb-->




<!--Page content-->
<!--===================================================-->
<div id="page-content">


    <!-- QUICK TIPS -->
    <!-- ==================================================================== -->
    <h3>Your content here...</h3>
    <br>
        <a href="index.html" class="btn btn-dark">Back</a>
        <br><br><br>
            <h3>Quick Tips</h3>
            <p>You may remove all ID or Class names which contain <code>demo-</code>, they are only used for demonstration.</p>
            <br>

                <h4>Navigation</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Expanded the navigation by default</td>
                            <td>Add <code>.mainnav-lg</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Fixed navigation</td>
                            <td>Add <code>.mainnav-fixed</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Create a ToggleButton for navigation</td>
                            <td>Add <code>.mainnav-toggle</code> to the button.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class="btn btn-lg btn-primary mainnav-toggle">Toggle Navigation</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Aside</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Make Aside visible by default</td>
                            <td>Add <code>.aside-in</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Fixed aside</td>
                            <td>Add <code>.aside-fixed</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Aside on the left side</td>
                            <td>Add <code>.aside-left</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Use the bright color theme</td>
                            <td>Add <code>.aside-bright</code> to the <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Create a ToggleButton for aside</td>
                            <td>Add <code>.aside-toggle</code> to the button.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button class="btn btn-success btn-lg aside-toggle">Toggle Aside</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Navbar</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Fixed navbar</td>
                            <td>Add <code>.navbar-fixed</code> to the <code>#container</code>.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Footer</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Fixed footer</td>
                            <td>Add <code>.footer-fixed</code> to the <code>#container</code>.</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Color Themes</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Apply a different color theme</td>
                            <td>You can change whole color theme of your website by adding a color theme stylesheet into the <code>&lt;head></code>.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><pre>&lt;head><br>	...<br>	&lt;link href="path-to-the-color-theme.css" rel="stylesheet"><br>&lt;/head></pre></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Animation</h4>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                        <tr>
                            <td style="width:70ex">Remove animation</td>
                            <td>Remove the class <code>.effect</code> from <code>#container</code>.</td>
                        </tr>
                        <tr>
                            <td>Add different slide transitions to the Navigation and Aside</td>
                            <td>
                                Add <code>.effect</code> to the <code>#container</code> and then combined with the class name of the transition function.
                                <br>
                                    <br>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th style="width: 250px;">Transition function</th>
                                                <th>Class name</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>easeInQuart</td>
                                                <td><code>.easeInQuart</code></td>
                                            </tr>
                                            <tr>
                                                <td>easeOutQuart</td>
                                                <td><code>.easeOutQuart</code></td>
                                            </tr>
                                            <tr>
                                                <td>easeInBack</td>
                                                <td><code>.easeInBack</code></td>
                                            </tr>
                                            <tr>
                                                <td>easeOutBack</td>
                                                <td><code>.easeOutBack</code></td>
                                            </tr>
                                            <tr>
                                                <td>easeInOutBack</td>
                                                <td><code>.easeInOutBack</code></td>
                                            </tr>
                                            <tr>
                                                <td>steps</td>
                                                <td><code>.steps</code></td>
                                            </tr>
                                            <tr>
                                                <td>jumping</td>
                                                <td><code>.jumping</code></td>
                                            </tr>
                                            <tr>
                                                <td>rubber</td>
                                                <td><code>.rubber</code></td>
                                            </tr>
                                            </tbody>
                                        </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
    <!-- ==================================================================== -->
    <!-- END QUICK TIPS -->



</div>
<!--===================================================-->
<!--End page content-->

*/