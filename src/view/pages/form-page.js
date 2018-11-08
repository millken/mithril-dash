import SampleComponent from '../components/sample-component';
import ContentAlert from '~/components/content-alert'

export default function() {
    return {
        alert(event) {
            event.preventDefault();
            ContentAlert.setInfo( "测试信息" );
        },     
        view() {
            /* return m('div', [
                m('h2', 'Congratulations, you made it!'),
                m('p', 'You\'ve spun up your very first Mithril app :-)'),
                m(SampleComponent),
            ]); */
            return (

                <div class="row gap-0 masonry pos-r">
                    <div class="bgc-white p-20 bd col-md">
                        <div class="mT-30">
                            <form>
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
                                    </div>
                                </div>
                                <fieldset class="form-group">
                                    <div class="row">
                                        <legend class="col-form-legend col-sm-2">Radios</legend>
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            Option one is this and that&mdash;be sure to include why it's great
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            Option two can be something else and selecting it will deselect option one
                                                </label>
                                            </div>
                                            <div class="form-check disabled">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            Option three is disabled
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="form-group row">
                                    <div class="col-sm-2">Checkbox</div>
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" /> Check me out
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-2"></div>
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-primary" onclick={this.alert}>Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
        },
    };
}