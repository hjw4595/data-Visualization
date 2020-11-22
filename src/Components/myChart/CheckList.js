import React from 'react';
import { observer } from 'mobx-react';

const CheckList = observer(({series}) => 
<>
        <input
            type="checkbox"
            checked={series.checked}
            onClick={() => series.checked = !series.checked}
        />{series.checked ? series.name : series.name}
        </>
);

export default CheckList;