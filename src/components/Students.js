import React, {useContext} from 'react';
import Context from '../context/context';

function Students (){
    
    const studentData = useContext(Context);
    return(
        <div>
            Hi {studentData.name}
        </div>
    )
}

export default Students