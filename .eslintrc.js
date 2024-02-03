module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        // 启用额外规则
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // 禁用基础配置汇总的规则
        "for-direction": "off",
    }
}