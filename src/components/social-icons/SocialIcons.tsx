import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi'

export const SocialIcons = () => {

  const openGithubUrl = () => {
    window.open('https://github.com/adrianohard', '_blank')
  }

  const openLinkedinUrl = () => {
    window.open('https://br.linkedin.com/in/adriano-hardtke', '_blank')
  }

  return (
    <div id="social-icons" className="flex gap-4 text-primary-dark items-center justify-center mt-4 ">
        <BiLogoGithub size="28" className="cursor-pointer" onClick={openGithubUrl} />
        {/* <BiLogoInstagram size="28" className="cursor-pointer" /> */}
        <BiLogoLinkedinSquare size="28" className="cursor-pointer" onClick={openLinkedinUrl} />
    </div>
  )
}
