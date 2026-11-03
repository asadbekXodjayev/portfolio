/**
 * Open-source contributions. Every entry here was checked against the GitHub
 * API (merged PRs authored by asadbekXodjayev). Add new ones to the top.
 *
 * status: 'merged' | 'open'
 */

export const contributions = [
  {
    id: 'megatron-tokenizer-recursion',
    org: 'NVIDIA',
    repo: 'Megatron-LM',
    repoUrl: 'https://github.com/NVIDIA/Megatron-LM',
    repoNote: 'Research framework for training transformer models at scale.',
    pr: 5445,
    url: 'https://github.com/NVIDIA/Megatron-LM/pull/5445',
    title: 'Fix infinite recursion in abstract tokenizer special-id property aliases',
    status: 'merged',
    date: '2026-07-10',
    diff: { added: 40, removed: 12, files: 2 },
    summary:
      'The cls/sep/pad/bos/eos/mask id properties on the abstract text tokenizer called themselves, so reading an alias a subclass did not override raised RecursionError. They now resolve through the short-name attribute and fail with a clear AttributeError when neither exists.',
    post: 'megatron-tokenizer-recursion',
  },
  {
    id: 'skillspector-tag-smuggling',
    org: 'NVIDIA',
    repo: 'SkillSpector',
    repoUrl: 'https://github.com/NVIDIA/SkillSpector',
    repoNote: 'Security scanner for AI agent skills (Claude Code, Codex, MCP).',
    pr: 167,
    url: 'https://github.com/NVIDIA/SkillSpector/pull/167',
    title: 'Detect Unicode Tag-block "ASCII smuggling" hidden instructions',
    status: 'merged',
    date: '2026-06-27',
    diff: { added: 119, removed: 0, files: 3 },
    summary:
      'Unicode Tag characters render as nothing but map one-to-one to ASCII, so a full instruction can hide inside ordinary skill text. Extended the invisible-character check to flag them, while leaving the legitimate emoji flag sequences alone.',
    post: 'skillspector-detection-gaps',
  },
  {
    id: 'skillspector-getattr-exec',
    org: 'NVIDIA',
    repo: 'SkillSpector',
    repoUrl: 'https://github.com/NVIDIA/SkillSpector',
    repoNote: 'Security scanner for AI agent skills (Claude Code, Codex, MCP).',
    pr: 166,
    url: 'https://github.com/NVIDIA/SkillSpector/pull/166',
    title: 'Detect reflective exec via getattr() with a literal name (AST9)',
    status: 'merged',
    date: '2026-06-23',
    diff: { added: 64, removed: 4, files: 4 },
    summary:
      'getattr(os, "system")(cmd) behaves exactly like os.system(cmd) but produced no findings. Added a rule for getattr calls whose literal name is an execution sink, with a deliberately narrow allowlist to avoid false positives.',
    post: 'skillspector-detection-gaps',
  },
  {
    id: 'tensorrt-llm-streaming-tool-calls',
    org: 'NVIDIA',
    repo: 'TensorRT-LLM',
    repoUrl: 'https://github.com/NVIDIA/TensorRT-LLM',
    repoNote: 'Inference toolkit for large language models on NVIDIA GPUs.',
    pr: 21513,
    url: 'https://github.com/NVIDIA/TensorRT-LLM/pull/21513',
    title: 'Flush tool calls delivered in a single streaming chunk',
    status: 'open',
    summary: 'Open pull request under review.',
  },
];

const mergedOnly = contributions.filter((c) => c.status === 'merged');

export const contributionStats = {
  merged: mergedOnly.length,
  // repositories that have at least one MERGED pull request (open PRs don't count)
  repos: new Set(mergedOnly.map((c) => `${c.org}/${c.repo}`)).size,
};
