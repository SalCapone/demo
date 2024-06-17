import H1 from '@/components/h1';
import { Suspense } from 'react';
import ProjectList from './components/project-list';
import ProjectListLoading from './components/project-list-loading';
import { ErrorBoundary } from 'react-error-boundary';


export default async function ProjectPage() {

    return (
        <div>
            <H1>Projects</H1>
            <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
                <Suspense fallback={<ProjectListLoading/>}>
                    <ProjectList/>
                </Suspense>
            </ErrorBoundary>
        </div>
    )
}