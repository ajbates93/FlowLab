"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const supabaseURL = (_a = process.env.SUPABASE_URL) !== null && _a !== void 0 ? _a : '';
const supabaseAnonKey = (_b = process.env.SUPABASE_ANON_KEY) !== null && _b !== void 0 ? _b : '';
const supabase = (0, supabase_js_1.createClient)(supabaseURL, supabaseAnonKey);
exports.supabase = supabase;
