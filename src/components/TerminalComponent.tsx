import Terminal from "./Terminal"
import TypingAnimation from "./TypingAnimation"
import AnimatedSpan from "./AnimatedSpan"
import FadeInText from "./FadeInText"

export default function TerminalComponent() {
  return (
    <Terminal>
      <TypingAnimation>{"> whoami"}</TypingAnimation>

      <AnimatedSpan className="text-green-500" delay={800}>
        frontend_developer
      </AnimatedSpan>

      <TypingAnimation delay={1600}>{"> cat about.txt"}</TypingAnimation>

      <AnimatedSpan className="text-cyan-400" delay={2400}>
        Passionate front-end developer crafting beautiful user experiences
      </AnimatedSpan>

      <TypingAnimation delay={3000}>{"> skills --display"}</TypingAnimation>

      <AnimatedSpan className="text-blue-500" delay={3800}>
        React • TypeScript • Tailwind CSS
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500" delay={4200}>
        JavaScript • HTML5 • CSS3 • Responsive Design
      </AnimatedSpan>

      <TypingAnimation delay={4600}>{"> npm run build"}</TypingAnimation>

      <AnimatedSpan className="text-green-500" delay={5400}>
        ✔ Building amazing interfaces
      </AnimatedSpan>

      <FadeInText className="text-purple-400" delay={6000}>
        Ready to bring your ideas to life!
      </FadeInText>
    </Terminal>
  )
}
