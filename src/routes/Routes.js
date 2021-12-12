import { Switch, Route} from 'react-router-dom';
import Content from '../component/Content';

function Routes(){
    return(
        <Switch>
            <Route exact path="/requests" component={Content} />
        </Switch>
    )
}

export default Routes