import { config } from '../data/config';
import { projects } from '../data/projects';
import { skillGroups } from '../data/skills';

export const runCommand = (raw) => {
  const input = (raw || '').trim();
  if (!input) return [''];
  const [cmd, ...args] = input.split(/\s+/);
  const handler = commands[cmd.toLowerCase()];
  if (!handler) return [`bash: ${cmd}: command not found`, `try 'help'`];
  return handler(args);
};

const commands = {
  help: () => [
    'available commands:',
    '  help       show this message',
    '  about      who is asad',
    '  projects   list projects',
    '  skills     list skills',
    '  contact    contact info',
    '  whoami     current user',
    '  ls         list sections',
    '  clear      clear the terminal',
    '  sudo       ???',
  ],
  about: () => [
    `${config.name} — ${config.role}`,
    `check /about for the long version.`,
  ],
  projects: () => [
    'projects:',
    ...projects.map((p) => `  [${p.type}] ${p.title.padEnd(22)} ${p.href}`),
  ],
  skills: () =>
    skillGroups.flatMap((g) => [
      `# ${g.title}`,
      ...g.items.map((s) => `  ${s.name.padEnd(18)} ${s.level}%`),
    ]),
  contact: () => [
    `email:    ${config.email}`,
    `phone:    ${config.phone}`,
    `telegram: ${config.socials.telegram}`,
  ],
  whoami: () => ['guest@asad.dev'],
  ls: () => ['home/  works/  skills/  about/  contacts/  comparision/'],
  clear: () => ['__CLEAR__'],
  sudo: () => [
    '[sudo] password for guest:',
    'guest is not in the sudoers file. This incident will be reported.',
  ],
  echo: (args) => [args.join(' ')],
};
