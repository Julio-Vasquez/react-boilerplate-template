import { useState } from 'react'

export const useStep = steps => {
    const [currentStep, setCurrentStep] = useState(0)

    const isLastStep = currentStep === steps.length - 1

    const isFirstStep = currentStep === 0

    const next = () => {
        setCurrentStep(current => (!isLastStep ? current + 1 : current))
    }

    const previous = () => {
        setCurrentStep(current => (!isFirstStep ? current - 1 : current))
    }

    const resetSteps = () => {
        setCurrentStep(0)
    }

    return {
        next,
        previous,
        resetSteps,
        isFirstStep,
        isLastStep,
        currentStep,
        content: steps[currentStep].component,
    }
}

export default useStep
