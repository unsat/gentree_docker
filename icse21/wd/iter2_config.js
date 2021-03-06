p_max_terminate_counter       =   10
p_thr_messed_up_kickin        =   3e4
p_thr_stuck_kickin            =   1e4
p_max_messed_up               =   10
p_max_stuck                   =   10
p_messed_up_factor            =   1
p_lim_times                   =   5
p_consecutive_success         =   3
p_thr_messed_up_switch        =   5
p_messed_lim_times            =   20
p_messed_consecutive_success  =   6

p_gen_cex_lim_leaves          =   16
p_gen_cex_heavy               =   [6, 6, 0]
p_gen_cex_normal              =   [6, 0, 0]
p_gen_cex_retry               =   [0, 6, 0]


if (config_space < 1e7) {
    p_max_stuck                   =   40
}


if (config_space < 3e5) {
    p_gen_cex_heavy               =   [2, 2, 0]
    p_gen_cex_normal              =   [2, 0, 0]
    p_gen_cex_retry               =   [0, 2, 0]

    p_max_terminate_counter       =   6
    p_thr_messed_up_kickin        =   1e4
    p_thr_stuck_kickin            =   1e4

    p_lim_times                   =   4
    p_consecutive_success         =   2
    p_thr_messed_up_switch        =   3
    p_messed_lim_times            =   10
    p_messed_consecutive_success  =   3
}

if (config_space < 4000) {
    p_max_terminate_counter       =   3
    p_lim_times                   =   3
    p_consecutive_success         =   1
}
