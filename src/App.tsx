import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const App: React.FC = () => {
    return (
        <div>
            <SignUp />
            <SignIn />
        </div>
    );
};

export default App;