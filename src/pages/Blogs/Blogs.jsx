import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const questionsdata = useLoaderData()
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                {questionsdata.map(question => (
                    <Blog key={question.id} question={question} />
                ))}
            </Suspense>
        </div>
    );
};

export default Blogs;