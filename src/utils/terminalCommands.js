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
  sudo: (args) => {
    if (args[0] === 'asad') {
      const jokes = [
        'access granted... just kidding 😂',
        'nice try bro 😭',
        'you thought you were root? think again.',
        'permission denied ❌ ego boosted ✅',
        'hacking NASA... 1%... failed 🚫',
        'sudo power not found. install confidence first.',
        'you are now... still a guest 😎',
        'error 403: asad is not that powerful',
        'FBI has entered the chat 🚔',
        'typing sudo doesn’t make you a hacker bro 💀',
        'root access? best I can do is console.log',
        'system says: go study instead 📚',
        'you unlocked nothing 🔓',
        'sudo failed successfully',
        'congrats! you hacked... nothing 🎉',
        'permission denied but respect granted 🤝',
        'admin rights loading... never mind.',
        'this attempt has been reported to your mom 📞',
        'you need +100 coding skill for this action ⚔️',
        'try again after 10 years of experience ⏳',
      ];

      const random = jokes[Math.floor(Math.random() * jokes.length)];
      return [random];
    }

    return [
      '[sudo] password for guest:',
      'guest is not in the sudoers file. This incident will be reported.',
    ];
  },
  echo: (args) => [args.join(' ')],
};
