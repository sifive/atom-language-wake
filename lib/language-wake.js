exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.wake', {
    type: 'preproc_arg',
    language (arg) { return 'wake' },
    content (arg) { return arg }
  })

}
