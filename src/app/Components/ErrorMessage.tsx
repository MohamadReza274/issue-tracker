import React, {PropsWithChildren} from 'react';

const ErrorMessage = ({children}: PropsWithChildren) => {
    if (!children) return null;
    return <p id="error" className="mt-2 text-sm text-red-600">
        {children}
    </p>
};

export default ErrorMessage;