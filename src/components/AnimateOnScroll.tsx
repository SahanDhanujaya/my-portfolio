import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const animations: Record<string, string> = {
  'fade-up':    'opacity-0 translate-y-10',
  'fade-down':  'opacity-0 -translate-y-10',
  'fade-left':  'opacity-0 translate-x-10',
  'fade-right': 'opacity-0 -translate-x-10',
  'fade':       'opacity-0',
  'zoom-in':    'opacity-0 scale-95',
}

export function AnimateOnScroll({
  children,
  animation = 'fade-up',
  duration = 'duration-700',
  delay = '',
  threshold = 0.15,
  className = '',
}) {
  const [ref, isVisible] = useScrollAnimation({ threshold })

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out ${duration} ${delay}
        ${isVisible ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : animations[animation]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}